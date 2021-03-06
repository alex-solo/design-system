import PropTypes from "prop-types";
import { ActionButton } from "../ActionButton/ActionButton";

/**
 * A section that will have a title, small description, and a link to some action we want to user to make
 */
export function CallToAction(props) {
  return (
    <aside>
      <div className="bg-circle-color text-white">
        <div className="pb-10 pt-10 text-sm md:text-base">
          <h2>{props.title}</h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 gap-5">
            {props.description ? (
              <p className="whitespace-pre-line">{props.description}</p>
            ) : (
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: props.html }}
              />
            )}
            <div>
              <p className="flex mb-4 text-center">
                <ActionButton
                  id="become-a-participant-btn"
                  custom={
                    "py-2 px-4 rounded text-custom-blue-projects-link bg-details-button-gray hover:bg-gray-300 border border-custom-blue-blue active:bg-custom-blue-dark active:border-2 active:border-white hover:border-2 hover:border-white"
                  }
                  className=""
                  href={props.href}
                  text={props.hrefText}
                />
              </p>
              <p>
                <a
                  href={props.privacyLink}
                  className="text-sm underline flex xl:inline lg:mr-10"
                >
                  {props.privacyLinkText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

CallToAction.propTypes = {
  /**
   * title of the call to action
   */
  title: PropTypes.string.isRequired,

  /**
   * a short description about what the call to action is about - string format
   */
  description: PropTypes.string,

  /**
   * a short description about what the call to action is about - html format
   */
  html: PropTypes.string,

  /**
   * the url to the action
   */
  href: PropTypes.string.isRequired,

  /**
   * url text to be displayed
   */
  hrefText: PropTypes.string.isRequired,

  /**
   * the url to the privacy policy
   */
  privacyLink: PropTypes.string.isRequired,

  /**
   * url text to be displayed for the privacy link
   */
  privacyLinkText: PropTypes.string.isRequired,
};
