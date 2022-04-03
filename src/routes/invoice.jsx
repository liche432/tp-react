import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
    let params = useParams();
    return <h2>Invoice: {params.invoiceId}</h2>;
}