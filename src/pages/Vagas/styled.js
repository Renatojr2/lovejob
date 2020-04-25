import styled from 'styled-components';

export const Container = styled.div `
    flex-direction: column;
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: auto;
    display: flex;
    

`;

export const Section = styled.div`
    margin: 15px 0;
    width: 100%;
    padding: 30px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0,0.1);
    border-radius: 8px;
  


`;


export const Text = styled.div`


  h2 {
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  .box {
    display: flex;
    flex-direction: column;

    .sectionGroup{
    display: flex;
    flex-direction: row;
    
  }

  .sectionGroup2{
    display: flex;
    align-items: center;
    flex-direction: row;
    
  }
    
  }

div.container {
  margin: 60px;
  display: flex;
  align-items: center;

 
  
  


  .content {
    background: #2ab3b9;
    width: 70px;
    height: 70px;
    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    .icon {
      margin-left: 7px;
    }

    span {
      font-size: 20px;
      color: #eee;
    }
  }

  .goup p{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  
}
/* section description */

.description {
  margin-top: 25px;

  p {
    font-size: 15px;
    word-spacing: 1px;
    line-height: 21px;
  }
}


`; /*fim text */

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;

  img {
    border: 1px solid #ddd;
    padding: 30px;
    width: 200px;
    margin-right: 20px;

  }


`;