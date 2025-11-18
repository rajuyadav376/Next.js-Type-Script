

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading product");
    }
    return (
        <div>
            {children}
            <h1>Features Product</h1>
        </div>
    );
}