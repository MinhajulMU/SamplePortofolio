import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from "../components/Header"
import Footer from "../components/Footer"

type LayoutProps = {
    children: React.ReactNode;
    title: string;
};

function Layout({ children, title }: LayoutProps) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div id="wrapper">
            <Head>
                <title>{title} | {process.env.appName} </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            {children}
            <Footer></Footer>

        </div>
    )
}

export default Layout
