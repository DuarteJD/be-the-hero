import React from 'react';
import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Linking} from 'react-native';

import {
  Container,
  Header,
  Logo,
  DetailButton,
  ContainerIncident,
  TextProperty,
  TextValue,
  ContainerContact,
  TextHero,
  TextDescription,
  ContainerContactActions,
  ActionButton,
  ActionText,
} from './styles';

const Page = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá, gostaria de ajudar no caso: ${incident.title}`;

  const sendMail = async () => {
    try {
      Linking.openURL(
        `mailto:${incident.email}?subject=Herói do caso: ${
          incident.title
        }&body=${message}`,
      );
    } catch (e) {
      alert(e.response);
    }
  };

  const sendWhatsApp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`,
    );
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <DetailButton onPress={navigateBack}>
          <Icon name="arrow-back" size={32} color="#e02041" />
        </DetailButton>
        <Logo source={logoImg} />
      </Header>

      <ContainerIncident>
        <TextProperty style={{marginTop: 0}}>ONG</TextProperty>
        <TextValue>
          {incident.name} de {incident.city} / {incident.uf}
        </TextValue>

        <TextProperty>Caso</TextProperty>
        <TextValue>{incident.description}</TextValue>

        <TextProperty>Valor</TextProperty>
        <TextValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </TextValue>
      </ContainerIncident>

      <ContainerContact>
        <TextHero>Salve o dia!</TextHero>
        <TextHero>Seja o herói deste caso.</TextHero>
        <TextDescription>Entre em contato.</TextDescription>

        <ContainerContactActions>
          <ActionButton onPress={sendWhatsApp}>
            <ActionText>WhatsApp</ActionText>
          </ActionButton>

          <ActionButton onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </ActionButton>
        </ContainerContactActions>
      </ContainerContact>
    </Container>
  );
};

export default Page;
