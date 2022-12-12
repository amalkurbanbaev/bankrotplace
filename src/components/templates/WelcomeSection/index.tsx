import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import vector from 'assets/images/first-section-image.svg';
import logo from 'assets/images/logo-first-section.svg';
import vectorCirlce from 'assets/images/vector-first-section.png';
import { Typography } from 'components/atoms/Typography';
import { SectionWrapper } from 'components/organisms/SectionWrapper';
import { FeedbackForm } from 'components/templates/FeedbackForm';

import {
    SloganWrapper,
    PictureBadge,
    PictureWrapper,
    HeadingSlogan,
} from './WelcomeSection.styled';

export const WelcomeSection = (): JSX.Element => {
    return (
        <SectionWrapper bgColor="accent">
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <SloganWrapper>
                            <HeadingSlogan>
                                ЗАКОННО СПИШЕМ ВАШИ ДОЛГИ
                            </HeadingSlogan>
                            <Typography>
                                Запишитесь на бесплатную консультацию
                            </Typography>
                        </SloganWrapper>

                        <FeedbackForm />
                    </Col>
                    <Col xs={12} md={7}>
                        <PictureWrapper>
                            <PictureBadge>
                                <Typography>
                                    Дарим до&nbsp;10 000 рублей
                                    за&nbsp;приведенного&nbsp;клиента
                                </Typography>
                            </PictureBadge>
                            <PictureBadge>
                                <Typography>
                                    Полное сопровождение банкротства
                                </Typography>
                            </PictureBadge>
                            <PictureBadge>
                                <Typography>
                                    257&nbsp;успешных&nbsp;процедур
                                </Typography>
                            </PictureBadge>
                            <PictureBadge>
                                <Typography>
                                    Скидка на&nbsp;другие юридические услуги
                                </Typography>
                            </PictureBadge>
                            <PictureBadge>
                                <Typography>
                                    Не&nbsp;доведем до&nbsp;банкротства&nbsp;—
                                    вернем деньги
                                </Typography>
                            </PictureBadge>
                            {/* <Image
                                src={logo}
                                alt="Логотип проекта BankrotPlace"
                                className="logo"
                            /> */}
                            <Image
                                src={vector}
                                alt="Абстрактное изображение"
                                className="vector"
                            />
                        </PictureWrapper>
                    </Col>
                </Row>
            </Container>
        </SectionWrapper>
    );
};
