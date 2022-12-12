import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

import logo from 'assets/images/logo-white.svg';
import mailIcon from 'assets/images/mail.svg';
import tgIcon from 'assets/images/tg.svg';
import waIcon from 'assets/images/whatsapp.svg';
import { BasicButton } from 'components/atoms/BasicButton';
import { Typography } from 'components/atoms/Typography/index';

import { Divider, HeaderWrapper, Nav, NavItem } from './Header.styled';

const menuItems = [
    {
        id: 1,
        title: 'О нас',
        section: '#about',
    },
    {
        id: 2,
        title: 'Банкротство',
        section: '#bankrotstvo',
    },
    {
        id: 3,
        title: 'Стоимость',
        section: '#prices',
    },
    {
        id: 4,
        title: 'Команда',
        section: '#team',
    },
    {
        id: 5,
        title: 'Новости',
        section: '#news',
    },
];

export const Header = (): JSX.Element => {
    return (
        <HeaderWrapper>
            <Container>
                <Row>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <Link href="/">
                            <Image src={logo} alt="Логотип" className="logo" />
                        </Link>
                        <Divider />
                        <Typography
                            variant="title.extraSmall"
                            $color="common.white"
                        >
                            Интеллектуальные решения&nbsp;банкротства
                        </Typography>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Nav>
                            {menuItems.map((el) => (
                                <NavItem key={el.id} href={el.section}>
                                    {el.title}
                                </NavItem>
                            ))}
                        </Nav>
                    </Col>
                    <Col
                        xs={12}
                        lg={3}
                        className="d-flex align-items-center justify-content-end gap-2 buttons"
                    >
                        <a href="https://t.me/Olgakrivozybova">
                            <Image src={tgIcon} alt="Телеграм" />
                        </a>
                        <a href="https://wa.me/79889817974">
                            <Image src={waIcon} alt="WhatsApp" />
                        </a>
                        <a href="mailto:bankrotplace@i-analytics.ru">
                            <Image src={mailIcon} alt="Email" />
                        </a>
                        <BasicButton
                            linkType="external"
                            href="tel:+79889817974"
                        >
                            Связаться&nbsp;с&nbsp;юристом
                        </BasicButton>
                    </Col>
                </Row>
            </Container>
        </HeaderWrapper>
    );
};
