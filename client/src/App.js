import './App.css';
import supabase from './supabaseClient';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    async function testSupabase() {
      // Replace 'test_table' with a real table name from your Supabase project
      const { data, error } = await supabase.from('test_table').select('*');
      if (error) {
        console.error('Supabase error:', error.message);
      } else {
        console.log('Supabase data:', data);
      }
    }
    testSupabase();
  }, []);

  return (
    <div className="landing-container">
      {/* Logo (replace with your own if you have one) */}
      <div className="logo">
        <span role="img" aria-label="plane">✈️</span>
      </div>

      {/* Headline */}
      <h1 className="headline">Where can $200 take you?</h1>

      {/* Subheadline */}
      <p className="subheadline">
        Enter your budget. We'll find you a full trip — transportation, sleeping, surviving.
      </p>

      {/* Main CTA Button */}
      <button className="cta-button">
        Plan My Trip &rarr;
      </button>

      {/* Footer */}
      <footer className="footer">
        <a href="#about">About</a> | <a href="#contact">Contact</a> | <a href="#login">Login</a>
      </footer>
    </div>
  );
}

export default App;