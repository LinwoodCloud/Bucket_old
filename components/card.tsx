import { LinkBox, LinkOverlay } from '@chakra-ui/layout';
import React, { ReactElement } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
    title: string;
    description: string;
    href: string;
}

export default function Card({ title, description, href }: Props): ReactElement {
    return (
        <LinkBox maxW="sm" p="5" borderWidth="1px" rounded="md">
            <Heading size="md">
                <NextLink href={href} passHref>
                    <LinkOverlay>{title}</LinkOverlay>
                </NextLink>
            </Heading>
            <Text>{description}</Text>
        </LinkBox>
    )
}
