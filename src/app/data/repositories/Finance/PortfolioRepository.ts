import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class PortfolioRepository extends FirebaseRepository {
  constructor() {
    super(`portfolio/$userId`);
  }

}

export default new PortfolioRepository()
