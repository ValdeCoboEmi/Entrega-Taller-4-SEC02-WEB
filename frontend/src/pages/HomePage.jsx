import { useEffect, useState } from 'react';
import {
  Alert,
  Badge,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';

const API_URL = import.meta.env.VITE_API_URL;

async function request(path, signal) {
  if (!API_URL) {
    throw new Error('VITE_API_URL no está configurada.');
  }

  const response = await fetch(`${API_URL}${path}`, { signal });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'No fue posible consultar el backend.');
  }

  return result;
}

function HomePage() {
  const [health, setHealth] = useState({ isLoading: true, message: '', error: '' });
  const [info, setInfo] = useState({ isLoading: true, integrantes: [], error: '' });

  useEffect(() => {
    const controller = new AbortController();

    request('/health', controller.signal)
      .then((result) => setHealth({ isLoading: false, message: result.message, error: '' }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setHealth({ isLoading: false, message: '', error: 'No se pudo conectar con el API.' });
        }
      });

    request('/info', controller.signal)
      .then((result) => setInfo({ isLoading: false, integrantes: result.data, error: '' }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setInfo({ isLoading: false, integrantes: [], error: error.message });
        }
      });

    return () => controller.abort();
  }, []);

  const healthState = health.isLoading ? 'loading' : health.error ? 'error' : 'ok';

  return (
    <main className="home-page py-5">
      <Container>
        <header className="home-header mb-5">
          <span className="eyebrow">INICIO</span>
          <h1>Taller IV</h1>
        </header>

        <section className="mb-5">
          <div className={`health-box health-${healthState}`}>
            <h4>Estado del API</h4>
            <p>{health.isLoading ? 'Verificando...' : health.error || health.message}</p>
          </div>
        </section>

        <section>
          {info.isLoading && (
            <div className="loading-state" role="status" aria-live="polite">
              <Spinner color="success" />
              <span>Consultando integrantes...</span>
            </div>
          )}

          {!info.isLoading && info.error && (
            <Alert color="danger" fade={false}>
              {info.error}
            </Alert>
          )}

          {!info.isLoading && !info.error && (
            <Row className="g-4">
              {info.integrantes.map((integrante) => (
                <Col md="6" lg="4" key={integrante.id}>
                  <Card className="home-card h-100">
                    <CardBody>
                      <span className="card-number">
                        {String(integrante.id).padStart(2, '0')}
                      </span>
                      <h2>{integrante.nombre}</h2>
                      <div className="character-details">
                        <span>Edad: {integrante.edad} años</span>
                        <span>Carrera: {integrante.carrera}</span>
                        <Badge color="light" pill>
                          Materias aprobadas: {integrante.materiasAprobadas}
                        </Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </section>
      </Container>
    </main>
  );
}

export default HomePage;
