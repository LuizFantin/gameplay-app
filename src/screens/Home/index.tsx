import React from "react";
import { useState } from "react";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { appointments } from "./mock";
import { AppointmentsList, Container, Content, Header, SelectContainer } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <Container>
            <Header>
                <Profile/>
                <ButtonAdd/>
            </Header>

            <SelectContainer>
                <CategorySelect categorySelectedId={category} setCategory={handleCategorySelect}/>
            </SelectContainer>

            <Content>
                <ListHeader
                    title='Partidas agendadas'
                    subtitle='Total 6'
                />

                <AppointmentsList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem = {({item}) => (
                        <Appointment data={item}/>
                    )}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider/>}
                />

            </Content>
        </Container>
    )
}