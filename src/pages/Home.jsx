import React, { useState } from 'react';
//import { gsap } from 'gsap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './darkMode.css';

export default function Home() {
    //const imageRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className={`content ${isDarkMode ? "dark-mode" : ""}`}>
                <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"}>
                    <Container>
                        <Navbar.Brand to="#home">Chaty-Bot</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#1">¿Qué hacemos?</Nav.Link>
                            <Nav.Link href="#2">Mensajes</Nav.Link>
                            <Nav.Link href="#3">¿Cómo ingresar?</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    
                        <button onClick={toggleDarkMode} className="btn btn-secondary">
                            {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </Container>
                </Navbar>

                <div className="container">
                    <div className="content-section mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 id='1'>Somos Chaty</h4>
                                <p>Bienvenido a <strong>Chaty-Bot</strong>, tu plataforma integral para la gestión de usuarios y comercios. Aquí puedes encontrar información general sobre el funcionamiento y las características principales de nuestra plataforma.</p>
                                <ul>
                                    <li><strong>Gestión de Usuarios:</strong> Administra tus usuarios de manera eficiente, actualiza sus datos y monitoriza sus actividades.</li>
                                    <li><strong>Análisis de Comercio:</strong> Accede a estadísticas detalladas sobre el rendimiento de tu comercio y toma decisiones informadas.</li>
                                    <li><strong>Integración con WhatsApp:</strong> Interactúa con tus clientes en tiempo real a través de nuestro chatbot integrado en WhatsApp.</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <br /><br />
                                <img src="https://res.cloudinary.com/dydhkd08i/image/upload/v1717118375/bot_phoxha.png" />
                            </div>
                        </div>
                    </div>

                    <div className="content-section mt-4">
                        <div className="row">
                            <div className="col-md-6 order-md-2">
                                <h4 id='1'>¿Qué hacemos?</h4>
                                <p>En <strong>Chaty-Bot</strong>, proporcionamos una plataforma completa para la gestión eficiente de usuarios y órdenes, diseñada para impulsar tu negocio. Nuestra solución destaca por su capacidad para automatizar y simplificar la interacción con tus clientes a través de diversas herramientas avanzadas.</p>
                                <ul>
                                    <li><strong>Gestión Integral de Usuarios:</strong> Nuestra plataforma te permite administrar la información de tus clientes de manera centralizada. Puedes registrar y actualizar datos clave como nombres, números de teléfono, y detalles de contacto, asegurando que siempre tengas la información más reciente y precisa.</li>
                                    <li><strong>Control de Órdenes:</strong> Facilita el seguimiento y la gestión de órdenes de tus clientes. Chaty-Bot te permite registrar, actualizar y monitorear el estado de cada orden, asegurando un proceso de compra eficiente y sin complicaciones.</li>
                                    <li><strong>Bot Automatizado de WhatsApp:</strong> Una de nuestras funcionalidades más destacadas es el bot automatizado de WhatsApp. Este bot interactúa con tus clientes en tiempo real, recogiendo información vital como el nombre, número de teléfono, y detalles de la orden. Esto no solo mejora la eficiencia, sino que también asegura una comunicación fluida y sin errores.</li>
                                    <li><strong>Analítica de Negocios:</strong> Con los datos recopilados, ya sea a través del bot o de manera manual, nuestra plataforma realiza un análisis detallado del rendimiento de tu negocio. Generamos informes y estadísticas personalizadas que te ayudan a tomar decisiones informadas y a identificar áreas de mejora. Esta funcionalidad te proporciona una visión clara y precisa de cómo va tu negocio.</li>

                                </ul>
                            </div>
                            <div className="col-md-6 order-md-1">
                                <img src="https://res.cloudinary.com/dydhkd08i/image/upload/c_crop,w_420,h_250/v1717082948/table_mdr7sa.png" alt="" className="img-fluid mb-3" />
                                <br /><br /><br /><br /><br /><br />
                                <img src="https://res.cloudinary.com/dydhkd08i/image/upload/v1717118214/tableimg_x8el36.png" />
                            </div>
                        </div>
                    </div>

                    <div className="content-section mt-4 d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 id='2' className='text-center'>Mensajes</h4>
                                <p className='text-center'>Con <strong>Chaty-Bot</strong>, puedes integrar un chatbot en WhatsApp para interactuar con tus clientes en tiempo real. Gestiona y visualiza los mensajes aquí.</p>
                                <ul>
                                    <li><strong>Chat en Tiempo Real:</strong> Responde a tus clientes de manera instantánea y automatiza respuestas comunes.</li>
                                    <li><strong>Historial de Conversaciones:</strong> Accede al historial de chats para seguir la comunicación con tus clientes.</li>
                                    <li><strong>Notificaciones:</strong> Recibe alertas cuando lleguen nuevos mensajes o cuando se necesite una acción inmediata.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="content-section mt-4">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 id='3'>¿Cómo ingresar a nuestra plataforma?</h4>
                                <p>Para comenzar a utilizar <strong>Chaty-Bot</strong>, sigue estos sencillos pasos:</p>
                                <ul>
                                    <li><strong>Solicitud de Registro:</strong> Para garantizar la seguridad y la correcta gestión de los usuarios, no permitimos el registro directo en nuestra plataforma. Los interesados deben solicitar acceso a través de nuestro equipo de soporte. Esto asegura que cada usuario sea verificado y aprobado adecuadamente.</li>
                                    <li><strong>Proceso de Solicitud:</strong> Envía una solicitud de registro a nuestro equipo de soporte a través de nuestro formulario de contacto en el sitio web o mediante un correo electrónico a <Link to="mailto:support@chaty-bot.com">support@chaty-bot.com</Link>. Asegúrate de incluir la siguiente información:
                                        <ul>
                                            <li>Nombre completo</li>
                                            <li>Nombre de la empresa</li>
                                            <li>Número de teléfono</li>
                                            <li>Correo electrónico de contacto</li>
                                            <li>Descripción breve del uso previsto de la plataforma</li>
                                        </ul>
                                    </li>
                                    <li><strong>Verificación y Registro:</strong> Una vez recibida tu solicitud, nuestro equipo revisará la información proporcionada. Si se aprueba, te registraremos en nuestra plataforma y te enviaremos tus credenciales de acceso (nombre de usuario y contraseña) a través del correo electrónico proporcionado.</li>
                                    <li><strong>Acceso a la Plataforma:</strong> Con tus credenciales, podrás iniciar sesión en <strong>Chaty-Bot</strong> y comenzar a gestionar tus usuarios y órdenes de manera eficiente. Accede a todas nuestras funcionalidades, incluyendo el bot automatizado de WhatsApp y la analítica avanzada para mejorar tu negocio.</li>
                                    <li><strong>Soporte Continuo:</strong> Si tienes alguna pregunta o necesitas asistencia adicional, nuestro equipo de soporte está disponible para ayudarte en cualquier momento. No dudes en contactarnos a través de nuestros canales de soporte.</li>
                                </ul>
                                <p>¡Estamos aquí para ayudarte a sacar el máximo provecho de <strong>Chaty-Bot</strong> y llevar tu negocio al siguiente nivel!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}; 