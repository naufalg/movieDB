import { Navbar } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getMovieById } from 'redux/actions/movie.action';
import {
  Layout,
  Row,
  Col,
  Image,
  Skeleton,
  Typography,
  Breadcrumb,
} from 'antd';
import placeholder from 'assets/images/placeholder-vertical.jpg';

const { Text, Link, Title } = Typography;

const { Content, Footer } = Layout;

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, moviesById } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar detail={true} />
      <Content
        className='site-layout'
        style={{ padding: '30px 50px 0', marginTop: 64, paddingBottom: '20px' }}
      >
        <Breadcrumb style={{ marginBottom: '20px' }}>
          <Breadcrumb.Item
            onClick={() => {
              history.push('/');
            }}
          >
            <a>Home</a>
          </Breadcrumb.Item>
          {moviesById && !isLoading ? (
            <Breadcrumb.Item>{moviesById.Title}</Breadcrumb.Item>
          ) : (
            <Skeleton.Button
              active={true}
              style={{ height: '16px', margin: 'auto' }}
              size={'small'}
            />
          )}
        </Breadcrumb>
        <Row justify='center' gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
          <Col sm={24} md={8} lg={6} xl={4}>
            {!isLoading && moviesById ? (
              <Image
                src={moviesById?.Poster}
                style={{
                  maxHeight: '360px',
                  maxWidth: '250px',
                  boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
                }}
                fallback={placeholder}
              />
            ) : (
              <Skeleton.Image style={{ width: '200px', height: '320px' }} />
            )}
          </Col>
          <Col sm={24} md={16} lg={12} xl={12}>
            {!isLoading && moviesById ? (
              <>
                <Title level={3}>{moviesById?.Title}</Title>
                <Title level={4}>{moviesById?.Year}</Title>
                <Title level={5}>Runtime: {moviesById?.Runtime}</Title>
                <Title level={5}>Genre: {moviesById?.Genre}</Title>
                <Title level={5}>Actors: {moviesById?.Actors}</Title>
                {moviesById.Plot === 'N/A' ? (
                  <Text>Plot: N/A</Text>
                ) : (
                  <Text>{moviesById?.Plot}</Text>
                )}
              </>
            ) : (
              [...Array(2)].map((item, index) => (
                <div key={index} style={{ minWidth: '200px' }} level={5}>
                  <Skeleton active />
                </div>
              ))
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
