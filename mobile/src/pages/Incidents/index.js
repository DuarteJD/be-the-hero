import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import logoImg from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Header,
  Text,
  TextBold,
  Logo,
  Title,
  Description,
  ContainerIncident,
  DetailButton,
  DetailButtonText,
  TextProperty,
  TextValue,
} from './styles';

const Page = () => {
  const navigation = useNavigation();

  const navigateToDetail = incident => {
    navigation.navigate('Detail', {incident});
  };

  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadIncidents = async () => {
    if (loading) {
      return;
    }

    if(total > 0 && incidents.length === total){
      return;
    }

    setLoading(true);

    const response = await api.get(`incidents?page=${page}`);

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, [loadIncidents]);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Text>
          Total de <TextBold>{total} casos</TextBold>
        </Text>
      </Header>
      <Title>Bem vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <FlatList
        style={{marginTop: 20}}
        data={incidents}
        keyExtractor={i => String(i.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <ContainerIncident>
            <TextProperty>ONG</TextProperty>
            <TextValue>{incident.name} de {incident.city} / {incident.uf}</TextValue>

            <TextProperty>Caso</TextProperty>
            <TextValue>{incident.title}</TextValue>

            <TextProperty>Valor</TextProperty>
            <TextValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </TextValue>

            <DetailButton
              onPress={() => {
                navigateToDetail(incident);
              }}>
              <DetailButtonText>Ver mais detalhes</DetailButtonText>
            </DetailButton>
          </ContainerIncident>
        )}
      />
    </Container>
  );
};

export default Page;
