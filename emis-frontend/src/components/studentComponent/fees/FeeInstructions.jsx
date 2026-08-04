import {
  FaUniversity,
  FaCalendarAlt,
  FaShieldAlt,
  FaInfoCircle
} from "react-icons/fa";

export default function FeeInstructions() {

  return (

    <div className="custom-card fee-instructions-card">

      <div className="card-header-custom">

        <h4>

          Payment Instructions

        </h4>

        <p>

          Important information regarding fee payments.

        </p>

      </div>

      <div className="instructions-list">

        <div className="instruction-item">

          <div className="instruction-icon">

            <FaUniversity />

          </div>

          <div>

            <h6>

              Payment Methods

            </h6>

            <p>

              Pay fees using UPI, Debit Card, Credit Card, Net Banking or Bank Transfer.

            </p>

          </div>

        </div>

        <div className="instruction-item">

          <div className="instruction-icon">

            <FaCalendarAlt />

          </div>

          <div>

            <h6>

              Due Date

            </h6>

            <p>

              Complete your fee payment before the due date to avoid late charges.

            </p>

          </div>

        </div>

        <div className="instruction-item">

          <div className="instruction-icon">

            <FaShieldAlt />

          </div>

          <div>

            <h6>

              Secure Payments

            </h6>

            <p>

              All online transactions are encrypted and securely processed.

            </p>

          </div>

        </div>

        <div className="instruction-item">

          <div className="instruction-icon">

            <FaInfoCircle />

          </div>

          <div>

            <h6>

              Need Help?

            </h6>

            <p>

              Contact the Accounts Department for payment issues or receipt verification.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}