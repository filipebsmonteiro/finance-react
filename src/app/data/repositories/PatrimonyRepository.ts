import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class PatrimonyRepository extends FirebaseRepository {
  constructor() {
    super(`patrimony/$userId`);
    this.oneToMany = false;
  }

}

export default new PatrimonyRepository()
