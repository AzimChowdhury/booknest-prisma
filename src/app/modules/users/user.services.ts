import prisma from '../../../shared/prisma';

const getAllUsers = async () => {
  const result = await prisma.user.findMany();
  const total = await prisma.user.count();

  return {
    total,
    data: result,
  };
};

// const getByIdFromDB = async (id: string): Promise<Room | null> => {
//   const result = await prisma.room.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       building: true,
//     },
//   });
//   return result;
// };

// const updateOneInDB = async (
//   id: string,
//   payload: Partial<Room>
// ): Promise<Room> => {
//   const result = await prisma.room.update({
//     where: {
//       id,
//     },
//     data: payload,
//     include: {
//       building: true,
//     },
//   });
//   return result;
// };

// const deleteByIdFromDB = async (id: string): Promise<Room> => {
//   const result = await prisma.room.delete({
//     where: {
//       id,
//     },
//     include: {
//       building: true,
//     },
//   });
//   return result;
// };

export const UserServices = {
  getAllUsers,
};
