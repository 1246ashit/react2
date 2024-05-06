import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center '>
                {text}
            </p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <FaArrowRight />
            </Link>
        </div>)
}
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            嗨，我是<span className='font-semibold'>俊杰 👋</span>
            <br />
            是個僑光科技大學資科系剛畢業的新鮮人
        </h1>
    ),
    2: (

        <InfoBox text="擅長後端技術，也懂前端開發。熱衷於學習新技術，期待在職場上發揮所長，"
            link="About"
            btnText="看看我會的!!"
        />
    ),
    3: (
        <InfoBox text="校內畢業專題比賽有得過第二名的殊榮，好奇我在這段期間做了什麼嗎?"
            link="Projects"
            btnText="作品集在這!!!"
        />
    ),
    4: (
        <InfoBox text="正在尋找有潛力的新鮮人嗎?我就是那位人選!!"
            link="Contact"
            btnText="我的聯絡方式在這!!!!"
        />
    ),
}

const HomeInfo = (props) => {
    return renderContent[props.currentStage] || null
}

export default HomeInfo