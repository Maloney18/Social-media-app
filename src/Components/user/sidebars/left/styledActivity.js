import styled from "styled-components";

export const StyledActivity = styled.div`
    width: 100%;

.upper-most {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    &  h2{
        font-size: 1.2rem;
        width: 100%;
        text-transform: capitalize;
    }
     .see-all {
        color: grey;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.07 ease-in;
        white-space: nowrap;

        &:hover {
            color: rgb(26, 25, 25);
        }
    }
}


.heading{
    width: 100%;
    padding: 1rem 0;
    h3{
        width: 100%;
        font-size: 1rem;
        text-transform: capitalize;

    }
}

.mentions{
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 246px;


&::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.1rem;
  }

    .mention{
        display: flex;
        width: 100%;
        gap: .8rem;
        padding: .5rem;
        align-items: center;

        .img_wrapper {
            width: 50px !important;
            height: 50px !important;
            background-color: var(--color-gray-lyt);
        }

        .texts{
            width: 100%;
            p,span{
                width: 100%;
                font-size: .9rem;

            }
            p{
                text-transform: capitalize;
            }
            span{
                color: gray;
            }
        }

    }
}
.all-suggestion {

    display: flex;
    gap: 15px;
    flex-direction: column-reverse;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 246px;


    &::-webkit-scrollbar {
        width: 0.3rem;
        height: 0.1rem;
      }
}



.add-new {
    display: flex;
    align-items: center;
    gap: 10px;
}
.new-name {
    flex: 2;
}

.new-name p {
    font-size: .9rem;
    font-weight: bolder;
}

.time {
    color: gray;
    font-size: .9rem;

}

.add-icon {
    width: calc(30px * 0.7) ;
    height: calc(30px * 0.7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    font-size: 17px;
    justify-content: center;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.07s ease-in;
    margin-right: 0.8rem;
}
.image {
    width: calc(30px * 0.7);
    height: calc(30px * 0.7);
    border-radius: 10%;
    display: flex;
    align-items: center;
    font-size: 17px;
    justify-content: center;
    cursor: pointer;
    transition: all 0.07s ease-in;
    border: 1px solid var(--blueViolet);
    margin-right: 0.8rem;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
}

.add-icon:hover, .image:hover {
    opacity: 0.6;
}

`;