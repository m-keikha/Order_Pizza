import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


// با وریینتس میتوانیم از یک موشین چند بار استفاده کنیم و کدهایمان را خوانا کنیم
// اول از همه می بایست در یک کتابخانه مانند زیر کد های موشن را ذخیره کنیم

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
            delay: 0.5
        }
    }
}

const nextVariants = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 110
        }
    }
}



export default function Base({ addBase, pizza }) {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            variants={containerVariants}
            initial='hidden' // گفتیم پراپرتی هیددن که اول کدها تعیین کردیم همان اینشیالز ما است
            animate='visible'

        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase(base)}
                            whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                    variants={nextVariants} // اگر اسم اینشیالز و انیمیت مانند عنصر والد
                    //ما همان هیددن و ویزیبل باشد بصورت خودکار اینشیالز و انیمیت را اجرا
                    // میکند و نیازی نیست ما اینجا بصورت دستی ان را بنویسیم 

                    // initial='hidden' 
                    // animate='visible'
                >
                    <Link to="/">
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)",
                                marginRight: 10
                            }}
                        >Back</motion.button>
                    </Link>
                    <Link to="/toppings">
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)",
                                marginLeft: 10
                            }}
                        >Next</motion.button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    );
}
