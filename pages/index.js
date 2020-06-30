import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Link from 'next/link';

const Home = (props) => {
    const {test, imgPath} = props;
    return (
        <div>
            <p>{test}</p>
            <img src={imgPath} />
            <Link href="./foo">fooに行くよ</Link>
        </div>
    )
}

export const getStaticProps = async (ctx) => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const obj = await res.json()
    return {
        props: {
            test:'ほげほげ',
            imgPath: obj.message
        },
        unstable_revalidate: 10
    }
}

export default Home
