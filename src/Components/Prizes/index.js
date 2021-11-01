import styled from "styled-components";
import anime from './prizes.jpg';
import anime2 from './prizes.webp';
import anime3 from './prizes.png';

function Prizes(){
    return <StyledPrizes>
        <div className = "heading">
            <h2>Prizes</h2>
        </div>
        <div className="color1">

        </div>
        <picture>
            <source srcSet={anime2} alt="h" />
            <source srcSet={anime3} alt="h" />
            <img src={anime} alt="h" />
        </picture>
        <div className="prize">
            <div className="head">
                <h3>FIRST</h3>
                <div className = "money">
                &#8377;5000
                </div>
            </div>
            <div className="head">
                <h3>SECOND</h3>
                <div className = "money">
                &#8377;3000
                </div>
            </div>
            <div className="head">
                <h3>THIRD</h3>
                <div className = "money">
                &#8377;1500
                </div>
            </div>
        </div>

    </StyledPrizes>
}
const StyledPrizes = styled.div
`
    width : 100%;
    height : 100vh;
    position : relative;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
   

    .heading{
        color : #000000;
        margin-left:35%;
    }
    h2{
        font-weight : 500;
        font-size : 5rem;
    }
    .color1{
        border-radius : 50%;
        background : #9A475D88;
    
        position : absolute;
        top:50%;
        left:0;
        width:500px;
        height:500px;
        transform:translate(-20%,-50%)


    }
    picture{
    position : absolute;
    top:20%;
    left:0;
    width : 18%;

    img{
        width:100%;
    
        object-fit:cover;
    }

}
    h3{
        font-weight : 500;
    }
    .prize{
        margin-top:4rem;
    margin-left:35%;
        
        width : 60%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    
        .head{
        width:30%;
        height:17rem;
       
            background-color : #F3C4F4;
            text-align : center;
          
            border-radius : 10px;
            font-size : 2rem;
            
            display:flex;
            justify-content:space-evenly;
            align-items:center;
            flex-direction:column;
            .money{
             width:80%;
             height:50%;
             
             
                text-align : center;
                background-color : #F8A9F9;
                display : flex;
                justify-content : center;
                align-items:center;
                border-radius : 10px;
                font-size : 1.75rem;
            }
        }

    }
    @media only screen and (max-width : 1200px){
        h2{
            font-size : 3.5rem;
        }
        .color1{
            width : 350px;
            height : 350px;
        }
        picture{
            width : 17%;
        }
        h3{
            font-size : 1.75rem;
        }
        .prize{
            width : 60%;
            margin-top : 5rem;
            .head{
                height : 13rem;
            }
        }

    }
    @media only screen and (max-width : 992px){
        picture{
            width : 19%;
            top : 30%;
        }
        h3{
            font-size : 1.5rem;
        }
        .color1{
            width : 300px;
            height : 300px;
            top : 60%;
        }
        .prize{
            .head{
                .money{
                font-size : 1.5rem;
                }
            }
        }
    }
    
`
export default Prizes

