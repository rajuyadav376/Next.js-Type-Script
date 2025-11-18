import { Metadata } from "next";
type Props = {
    params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const Id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Product ${Id}`);
        }, 100);
    });
    return{
        title: `Product ${title}`,
    }
};

export default async function ProductsDetails({
    params,
}: {
    params:Promise<{productId: string}>;
}) {
    const productId = (await params).productId;
  return (
   <h1>Details about Products {productId}</h1>
  );
}