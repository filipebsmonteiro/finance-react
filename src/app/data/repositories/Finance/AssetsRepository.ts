import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class AssetsRepository extends FirebaseRepository {
  constructor() {
    super(`patrimony/$userId`);
    this.oneToMany = false;
  }

}

export default new AssetsRepository()
