import React from "react";
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { // برای انیمیت و اینشیالز خودمان یک اسم ب دلخواه می گذاریم و بعدا مشخص می کنیم منظورمان اینیشالز است
        opacity: 0,
        x: '100vw' // المنت ما خارج از پیج قرار می گیرد
    },
    visible: {
        opacity: 1,
        x: 0,
        // ترنسیشن را در قسمت انیمیت بدین صورت می گذاریم
        transition: {
            type: 'spring',
            // ماس و دمپینگ بر حالت فنری و سرعت عنصر تاثیرمی گذارند
            mass: 0.4,
            damping: 8,
            // delay: 0.5,
            // با وِن خط پایین اولویت را با این انمیشن والد کردیم یعنی
            // اول این اجرا شود و بعدا چایلد ها
            when: 'beforeChildren',
            // با استاگرچایلدرن میزان تاخیر اجرای هر انیمیشن نسبت به
            // انیمیشن قبلی خود را مشخص میکنیم 
            staggerChildren: 2
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export default function Order({ pizza }) {
    return (
        <motion.div className="container order"
            variants={containerVariants}
            initial='hidden'
            animate='visible'

        >
            <h2>Thank you for your order :)</h2>
            <motion.p
                variants={childVariants}
            >
                You ordered a <strong>{pizza.base}</strong> pizza with:
            </motion.p>
            <motion.div
                variants={childVariants}
            >
                {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

            </motion.div>
        </motion.div>
    )
}
