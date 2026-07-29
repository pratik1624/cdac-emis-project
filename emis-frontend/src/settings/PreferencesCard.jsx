import { useTheme } from "../context/ThemeContext";

export default function PreferencesCard(){

    const {theme,toggleTheme}=useTheme();

    return(

        <div className="card shadow-sm border-0">

            <div className="card-header bg-success text-white">

                <h5 className="mb-0">

                    Preferences

                </h5>

            </div>

            <div className="card-body">

                <div className="form-check form-switch">

                    <input

                        className="form-check-input"

                        type="checkbox"

                        checked={theme==="dark"}

                        onChange={toggleTheme}

                    />

                    <label className="form-check-label">

                        Dark Mode

                    </label>

                </div>

            </div>

        </div>

    );

}