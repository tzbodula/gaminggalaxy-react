import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom"

export default function LoginScreen() {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
      <div>
        <Helmet>
          <title>Log In</title>
        </Helmet>
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-3">
                <img
                  src="public/img/logo/logo-medium.png"
                  class="heading-section"
                  alt="Gaming Galaxy Logo"
                ></img>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4">
                <div class="login-wrap p-0">
                  <h3 class="mb-4 text-center">Sign In</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" required />
                    </Form.Group>
                    <div className="form-group">
                      <Button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </Button>
                    </div>
                    <div class="form-group d-md-flex">
                      <div class="w-50">
                        <label
                          class="checkbox-wrap checkbox-primary"
                        >
                          {" "}
                          Remember Me
                          <input type="checkbox" checked></input>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="w-50 text-md-right">
                        <a href="/forgotpassword">
                          Forgot Password
                        </a>
                      </div>
                    </div>
                    <div class="mt-2 mb-4 text-center">
                      Already have an account?<a href={`/signup?redirect=${redirect}`}> Click Here!</a>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}