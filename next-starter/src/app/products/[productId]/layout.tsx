import React from "react";

export default function ProductDetailsLayout({
    children,
}: {
    children : React.ReactNode;
}) {
    return(
        <>
            {children}
            <p>Feature Products</p>
        </>
    )
}   
