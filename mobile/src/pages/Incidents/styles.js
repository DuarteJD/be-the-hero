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

export const Text = styled.Text`
  font-size: 15px;  
  color: #737380;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;    
  margin-top: 28px;
  font-weight: bold;
  color: #13131a
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;  
  line-height: 24px;
  color: #737380;
`;

export const ContainerIncident = styled.View`    
  padding: 24px;
  border-radius: 8px;
  background-color:#fff;
  margin-bottom: 16px;
`;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;

export const TextProperty = styled.Text`
  font-size: 14px;  
  color: #41414d;
  font-weight: bold;
`;

export const TextValue = styled.Text`  
  margin-bottom: 10px;
  font-size: 15px;  
  color: #737380;
`;