import styled from '@emotion/styled';
export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
    margin-right: auto;
  width: 310px;
  height: 250px;
  border: 2px solid darkgrey;
  border-radius: 5px;
  padding: 15px;
  background-color: snow;

 label{


  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.18;
}
input{
  padding: 10px;
  border: 2px solid #00e45f;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 500;
  width: 250px;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
}
  button{
    
    margin-left: auto;
    margin-right: auto;
  font-size: 16px;
  width: 150px;
  padding: 4px;
  border: 2px solid darkgrey;
  border-radius: 4px;
  background-color: darkgrey;
  margin-top: 20px;
  cursor: pointer;
}
`


