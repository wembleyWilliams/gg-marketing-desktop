import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds)
}

