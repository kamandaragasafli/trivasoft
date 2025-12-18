import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">TrivaSoft</h3>
          <p className="footer-description">
            Rəqəmsal dünyada innovativ həllər təqdim edən lider agentlik.
            Biznesinizi növbəti səviyyəyə qaldırırıq.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Səhifələr</h4>
          <ul className="footer-links">
            <li><Link to="/">Ana Səhifə</Link></li>
            <li><Link to="/xidmetler">Xidmətlər</Link></li>
            <li><Link to="/haqqimizda">Haqqımızda</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/elaqe">Əlaqə</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Xidmətlər</h4>
          <ul className="footer-links">
            <li>
              <Link to="/xidmetler/ai">AI Avtomatlaşdırma</Link>
            </li>
            <li>
              <Link to="/xidmetler/web">Web Həllər</Link>
            </li>
            <li>
              <Link to="/xidmetler/erp">ERP Həlləri</Link>
            </li>
            <li>
              <Link to="/xidmetler/marketinq">Marketinq</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Əlaqə</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📧</span>
              <span>info@trivasoft.az</span>
            </li>
            <li>
              <span className="contact-icon">📱</span>
              <span>+994 55 386 12 11</span>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Nizami street AFF Business House</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {new Date().getFullYear()} TrivaSoft. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


