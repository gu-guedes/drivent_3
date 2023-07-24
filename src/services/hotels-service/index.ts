import enrollmentsService from '../enrollments-service';
import { notFoundError } from '@/errors';
import { paymentRequired } from '@/errors/payment-required-error';
import hotelsRepository from '@/repositories/hotels-repository';
import ticketsRepository from '@/repositories/tickets-repository';

async function getAllHotels(userId: number) {
  const enrollment = await enrollmentsService.getUserEnrollment(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();

  const { isRemote, includesHotel } = ticket.TicketType;
  const notPaid = ticket.status === 'RESERVED';
  if (!includesHotel || isRemote || notPaid) throw paymentRequired();

  const hotels = await hotelsRepository.getAllHotels();
  if (!hotels || !hotels.length) throw notFoundError();

  return hotels;
}

async function getHotelWithRoomsById(userId: number, hotelId: number) {
  await getAllHotels(userId);

  const hotelWithRooms = await hotelsRepository.getHotelWithRoomsById(hotelId);
  if (!hotelWithRooms) throw notFoundError();
  const { id, name, image, createdAt, updatedAt, Rooms } = hotelWithRooms;
  return {
    id,
    name,
    image,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    Rooms:
      Rooms.length > 0
        ? Rooms.map((room) => {
            return {
              ...room,
              createdAt: room.createdAt.toISOString(),
              updatedAt: room.updatedAt.toISOString(),
            };
          })
        : [],
  };
}
const hotelsService = {
  getAllHotels,
  getHotelWithRoomsById,
};

export default hotelsService;