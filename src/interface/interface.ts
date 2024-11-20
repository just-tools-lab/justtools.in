import React from "react"

// @/ui/reusable/list/List.tsx | 
interface listItem {
    icon?: string | React.ReactNode,
    text: string,
    link?: string
}; 

interface listProps {
    items?: listItem[],
    children?: React.ReactNode,
    display?: "horizontal" | "vertical"
}

// @/ui/reusable/container/Container.tsx | 
interface containerProps {
    containerContent: React.ReactNode[], 
    display?: "horizontal" | "vertical"
}

// @/ui/reusable/product/Product.tsx |
interface button {
    icon?: React.ReactNode | string,
    text: React.ReactNode | string,
    link: string
}

interface productContent {
    icon?: React.ReactNode | string,
    title: React.ReactNode | string,
    description: React.ReactNode | string,
    buttons?: button[],
    heroImage?: string

}

interface productProps {
    productContent : productContent[],
    direction?: "row" | "row-reverse"
}


export type {
    listProps, 
    listItem, 
    containerProps,
    productProps,
    productContent,
    button
}; 
