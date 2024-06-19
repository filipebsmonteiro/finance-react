import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class BalanceRepository extends FirebaseRepository {
  constructor() {
    super(`balances/_userId`);
  }

}

export default new BalanceRepository()
