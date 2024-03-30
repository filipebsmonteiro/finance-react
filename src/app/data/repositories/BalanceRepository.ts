import { FirebaseRepository } from "@/app/data/repositories/FirebaseRepository";

class BalanceRepository extends FirebaseRepository {
  constructor() {
    super(`balances/$userId`);
  }

}

export default new BalanceRepository()
