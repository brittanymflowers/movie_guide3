import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test footer links', () => {
    test('renders Now Playing link', () => {
        render(<Router><Footer /></Router>);
        const linkElement = screen.getByText(/Now Playing/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Most Popular link', () => {
        render(<Router><Footer /></Router>);
        const linkElement = screen.getByText(/Most Popular/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Top Rated link', () => {
        render(<Router><Footer /></Router>);
        const linkElement = screen.getByText(/Top Rated/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Home link', () => {
        render(<Router><Footer /></Router>);
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });
})