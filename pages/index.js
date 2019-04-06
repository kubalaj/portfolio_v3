import Brick from "../components/Brick/Brick.js";
import Layout from "../components/Layout/Layout.js";
import Link from "next/link";
import "../styles.scss";

export default () => (
  <div>
    <Layout>
      <div className="content">
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="Piano"
              source="/static/piano/piano.png"
              link="/piano"
            />
          </div>
        </div>
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="The Oblong Adventure"
              source="/static/the_oblong_adventure/detail.png"
              link="/oblongadventure"
            />
          </div>
        </div>
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="openGL Pacman P.O.C."
              source="/static/pacman/hero.png"
              link="/pacman"
            />
          </div>
        </div>
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="Tic Tac Toe Game"
              source="/static/tic_tac_toe/hero.png"
              link="/tictactoe"
            />
          </div>
        </div>
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="The Mess 16mm Film"
              source="/static/the_mess/theMess.gif"
              link="/themess"
            />
          </div>
        </div>
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="Southwest Colorado Photojournalism"
              source="/static/sw-colorado/IMG_9838.png"
              link="/swcolorado"
            />
          </div>
        </div>
        <div className="row">
          <div className="gutter-50">
            <Brick
              title="I Remember 16mm Film"
              source="/static/i_remember/hero.png"
              link="/iremember"
            />
          </div>
        </div>
      </div>
    </Layout>
  </div>
);
