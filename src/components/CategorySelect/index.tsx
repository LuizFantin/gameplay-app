import React from "react";
import { Container } from "./styles";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
    categorySelectedId: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({categorySelectedId, setCategory, hasCheckBox = false}: Props) {
    return (
        <Container
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelectedId}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </Container>
    )
}