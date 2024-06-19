import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class PortfolioRepository extends FirebaseRepository {
  constructor() {
    super(`portfolio/_userId`);
  }

}

export default new PortfolioRepository()
