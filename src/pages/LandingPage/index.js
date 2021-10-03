import React, { useCallback, useEffect, useState } from 'react';
import {
  Layout,
  Row,
  Col,
  Input,
  Skeleton,
  Spin,
  BackTop,
  // AutoComplete,
} from 'antd';
import { CardComponent, Navbar } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovie,
  // getMovieAutoComplete,
  getMovieNextPage,
} from 'redux/actions/movie.action';
import { useHistory } from 'react-router';
// import { useDebounce } from 'utils';

const { Content, Footer } = Layout;
const { Search } = Input;

export default function LandingPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    movies,
    isLoaded,
    isLoading,
    isLoadMore,
    searched,
    activePage,
    allLoaded,
    // autoComplete,
  } = useSelector((state) => state.movies);
  const [searchInput, setSearchInput] = useState(searched);

  useEffect(() => {
    if (!movies && !isLoaded) {
      dispatch(getMovie());
    }
  }, [dispatch, isLoaded, movies]);

  useEffect(() => {
    if (searched) {
      setSearchInput(searched);
    }
  }, [searched]);

  const onSearch = (value) => {
    setSearchInput(value);
    dispatch(getMovie(value));
  };

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  // infinite scroll feature
  const isBottom = (el) => {
    return el?.getBoundingClientRect().bottom <= window.innerHeight;
  };

  function fetchNextPage(searchInput, activePage) {
    fetchNextPage = function () {};
    dispatch(getMovieNextPage(searchInput, activePage));
  }

  const trackScrolling = useCallback(() => {
    const el = document.getElementById('listing-container');
    if (isBottom(el) && !isLoading) {
      fetchNextPage(searched, activePage);
    }
  }, [activePage, dispatch, isLoading]);

  useEffect(() => {
    if (!allLoaded) document.addEventListener('scroll', trackScrolling);
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, [trackScrolling, allLoaded, dispatch]);

  // const [autoCompInput, setAutoCompInput] = useState('');

  // const handleAutoComplete = (value) => {
  //   setAutoCompInput(value ? value : []);
  // };

  // const onSelect = (value) => {
  //   setSearchInput(value);
  //   dispatch(getMovie(value));
  // };

  // useEffect(() => {
  //   if (autoCompInput?.length > 0) {
  //     dispatch(getMovieAutoComplete(autoCompInput));
  //   }
  // }, [autoCompInput]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <div style={{ marginTop: '20px' }}>
          <Row justify='center'>
            <Col sm={24} lg={12} style={{ padding: '20px 0 30px' }}>
              {/* <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: 300 }}
                options={autoComplete}
                onSelect={onSelect}
                onSearch={handleAutoComplete}
              > */}
              <Search
                placeholder='Find'
                value={searchInput}
                onChange={onChange}
                onSearch={onSearch}
                enterButton
                size='large'
              />
              {/* </AutoComplete> */}
            </Col>
          </Row>
          <Row
            justify='center'
            gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}
            id='listing-container'
          >
            {movies && !isLoading && isLoaded ? (
              movies.map((item, index) => (
                <Col key={index} sm={24} md={12} lg={8} xl={6}>
                  <CardComponent
                    img={item.Poster}
                    title={item.Title}
                    year={item.Year}
                    onClick={() => {
                      history.push(`/movie/${item.imdbID}`);
                    }}
                  />
                </Col>
              ))
            ) : isLoading ? (
              <Row
                justify='center'
                gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}
              >
                {[...Array(4)].map((index2) => (
                  <Col
                    key={index2}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <>
                      <Skeleton.Image
                        active
                        style={{
                          width: '200px',
                          height: '320px',
                        }}
                      />
                    </>
                  </Col>
                ))}
              </Row>
            ) : (
              <div>Nothing to see here...</div>
            )}
          </Row>
          {isLoadMore && (
            <Row style={{ marginTop: '20px' }} justify='center'>
              <Spin size='large' />
            </Row>
          )}
        </div>
      </Content>
      <BackTop />
      <Footer style={{ textAlign: 'center' }}>
        MovieDB ©{new Date().getFullYear()} Created by Naufal Ghifari
      </Footer>
    </Layout>
  );
}
