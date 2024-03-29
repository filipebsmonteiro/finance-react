import AxiosClient from "@/app/data/clients/AxiosClient";
import { IClient } from "@/app/data/clients/Client";

const IBGERepository: IClient = new AxiosClient({
  baseURL: 'https://apisidra.ibge.gov.br'
});

export default IBGERepository;
