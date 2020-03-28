import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-horizontal: 24px;
    padding-top: 20px;
`;

export const Header = styled.View`    
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`  
`;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const ContainerIncident = styled.View`    
  padding: 24px;
  border-radius: 8px;
  background-color:#fff;
  margin-bottom: 16px;
  margin-top: 28px;  
`;

export const TextProperty = styled.Text`
  font-size: 14px;  
  color: #41414d;
  font-weight: bold;
  margin-top: 8px;  
`;

export const TextValue = styled.Text`  
  font-size: 15px;  
  color: #737380;
`;

export const ContainerContact = styled.View`    
  padding: 24px;
  border-radius: 8px;
  background-color:#fff;
  margin-bottom: 16px;
`;

export const TextHero = styled.Text`
  font-size: 20px;  
  color: #13131a;
  font-weight: bold;
  line-height: 30px;
`;

export const TextDescription = styled.Text`
  font-size: 15px;  
  color: #737380;
  margin-top: 16px;
`;

export const ContainerContactActions = styled.View`    
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color:#e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;  
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: 15px;  
  color: #fff;  
  font-weight: bold;
`;