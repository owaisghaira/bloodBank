import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons'


const Donorcard = ({ value: { name, dateOfBirth, bloodGroup, location, phone, city } }) => {
    return (

        <Content>
            <Card style={{ flex: 0 }}>
                <CardItem style={{ backgroundColor: 'blue' }}>
                    <View style={{ width: '80%', flexDirection: 'row' }}>
                        <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png' }} />
                        <Body style={{ marginLeft: 10 }}>
                            <Text style={styles.text}>{name}</Text>
                            <Text note>{dateOfBirth}</Text>
                        </Body>
                    </View>
                    <Right style={{ width: "20%" }}>
                        <Text style={styles.text}>{bloodGroup}</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon name="home" size={23} />
                    <Body>
                        <Text style={{ marginLeft: 5 }}>{location}</Text>
                    </Body>

                </CardItem>
                <CardItem>
                    <Icons name="call" size={23} />
                    <Body>
                        <Text style={{ marginLeft: 15 }}>{phone}</Text>
                    </Body>

                </CardItem>
                <CardItem style={{ padding: 0 }}>
                    <Left>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <Icon name="location" />
                            <Text>{city}</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </Content>
        // </Container>

    )
}

export default Donorcard

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 25,
        color: '#fff'
    }
})
