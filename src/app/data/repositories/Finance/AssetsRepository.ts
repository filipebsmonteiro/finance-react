import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class AssetsRepository extends FirebaseRepository {
  constructor() {
    super(`patrimony/_userId`);
    this.oneToMany = false;
  }

}

export default new AssetsRepository()
