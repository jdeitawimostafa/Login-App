import bcrypt from "bcrypt";

export async function hashPass(unHashPass: string) {
  return await bcrypt.hash(unHashPass, 10).then((hash: string) => {
    return hash;
  });
}

export async function isSamePass(unHashPass: string, hashPass: string) {
  return await bcrypt.compare(unHashPass, hashPass).then((result: boolean) => {
    return result;
  });
}
