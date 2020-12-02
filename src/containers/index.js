import  React from 'react';

function Class() {
    let text ="текст";
    let show = true;
    let word = "";
    if (show) {
        word = "текст1"
    } else {
        word = "текст2"
    }
    let style = {
        backgroundColor: "green",
        width: "100px",
        height: "100px",
        border: "2px solid black",
        borderRadius: "30px"
    }
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let newArr = arr.map((item, i) => <li key={i}>{item}</li>);
    let variable = false;
    function handleClick() {
        variable = true;
        console.log(variable);
    }
    let imgs = [
    {
        img: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
        name: "tree",
        description: "Обои с деревьями"
    },
    {
        img: "https://images2.alphacoders.com/902/902946.png",
        name: "supreme",
        description: "Magic World Wallpaper"
    },
    {
        img: "https://images4.alphacoders.com/936/936378.jpg",
        name: "galaxy",
        description: "Обои Галактики"
    },
    {
        img: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
        name: "tree",
        description: "Обои с деревьями"
    },
    {
        img: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
        name: "tree",
        description: "Обои с деревьями"
    },
    {
        img: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
        name: "tree",
        description: "Обои с деревьями"
    }
]

let newImgs = imgs.map((item, i) => (<div key={i}>
    <img style={{width: "100px", height: "100px"}} src={item.img} />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
</div>))

const getNum1 = () => 1
const getNum2 = () => 2



    return (
        <div>
            <div>Слово</div>
            <div>{text}</div>
            <div>{word}</div>
            <div style={style}></div>
            <ul>
                {newArr}
            </ul>
            <button onClick={handleClick}>GO</button>
            {newImgs}
            {getNum1() + getNum2()}
        </div>
    )

};

export default Class;