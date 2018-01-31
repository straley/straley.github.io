import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: "0 6px 0 0",
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    fontSize: 13,
    lineHeight: 1.33,
  },
  paper: {
    padding: 6,
    margin: "6px 0 0 6px",
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: "#000",
    margin: "0 0 6px 0",
    lineHeight: 1,
  },
  sidebarText: {
    fontSize: 13,
    margin: 0,
    lineHeight: 1.33,
  },
  sidebarList: {
    fontSize: 16,
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    marginLeft: 22,
    textIndent: -19,
    color: "#222",
    '&:before': {
      position: 'relative',
      top: 2,
      left: -4,
      fontFamily: 'Material Icons',
    }
  },
  phone: {
    '&:before': {
    	content: '"call "',
    }
  },
  address: {
    '&:before': {
    	content: '"place "',
    }
  },
  email: {
    '&:before': {
    	content: '"email "',
    }
  },
  github: {
    '&:before': {
    	content: '"code "',
    }
  },
  chip: {
    fontSize: 14,
    margin: 2,
    padding: 6,
    lineHeight: 1.33,
    borderRadius: 0,
    display: "inline-block",
    background: "#ee6",
    color: "#222",

  },
  mainName: {
    fontSize: 26,
    fontWeight: 500,
    color: "#000",
    margin: "10px 6px 10px 6px",
    lineHeight: 1,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#000",
    margin: "6px 6px 12px 6px",
    lineHeight: 1,
  },
  mainText: {
    fontSize: 15,
    margin: "0 6px 6px 6px",
    color: "#222",
    lineHeight: 1.5,
  },
  boldMainText: {
    fontWeight: 500,
  },
  separator: {
    background: "#eee",
    display: "block",
    width: "100%",
    height: "1px",
    padding: 0,
    position: "relative",
    left: -6,
    width: "calc( 100% + 12px )",
    margin: "14px 0 14px 0",
  },
});

function MiniChip(props) {
  const { className, label } = props;
  const labels = Array.isArray(label) ? label : [label];
  return labels.map(label => <div className={className}>{label}</div>);
}

function Separator(props) {
  const { className } = props;
  return <div className={className}></div>;
}

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Contact</h2>
            <ul className={classes.sidebarList}>
              <li className={`${classes.listItem} ${classes.phone}`}><a href="sms:+15127030428">512.703.0428</a></li>
              <li className={`${classes.listItem} ${classes.address}`}><a href="https://www.google.com/maps/place/30°09%2750.5%22N+97°43%2717.9%22W">7001 Brick Slope Path<br/>Austin, TX 78744</a></li>
              <li className={`${classes.listItem} ${classes.email}`}><a href="mailto:scottstraley@gmail.com">scottstraley@gmail.com</a></li>
              <li className={`${classes.listItem} ${classes.github}`}><a href="https://github.com/straley">github.com/straley</a></li>
            </ul>
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Skills</h2>
            <MiniChip label={[
              "UX implementation", "Agile Development", "PaaS Utilization", "Responsive Design", "Team-Building", "Mentoring", "Scalability", "Technology Evangelism"
            ]} className={classes.chip} />
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Services</h2>
            <MiniChip label={[
              "AWS", "Google Cloud Platform", "DigitalOcean", "Heroku", "IBM Watson"
            ]} className={classes.chip} />
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Data</h2>
            <MiniChip label={[
              "Firebase", "Redis", "MySQL", "PostgreSQL", "MongoDB"
            ]} className={classes.chip} />
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Languages</h2>
            <MiniChip label={[
              "Javascript", "ES6+", "ESNext", "Typescript", "Node.js", "Perl", "PHP", "Python", "Ruby on Rails", "CSS", "Sass"
            ]} className={classes.chip} />
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Tools</h2>
            <MiniChip label={[
              "Git", "Jira", "Akamai", "Apache", "Nginx", "Webpack", "Docker", "Doku"
            ]} className={classes.chip} />
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.sidebarTitle}>Technology</h2>
            <MiniChip label={[
              "API Integration", "React", "Redux", "Functional Javascript", "Flow", "Web Components", "Material Design", "Stencil", "Next.JS", "IoT Integration", "Natural Language Processing", "Machine Learning",  "WebGL", "WebRTC", "WebSockets", "Arduino", "Raspberry PI", "Dynamixel Servos"
            ]} className={classes.chip} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            <h1 className={classes.mainName}>Scott Straley</h1>
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.mainTitle}>Senior Architect &amp; Engineer</h2>
            <p className={classes.mainText}>Versatile and experienced full-stack architect and engineer with an emphasis on producing state-of-the-art front-end solutions.  Over twenty years experience developing and operating robust high-traffic internet applications in a wide variety of industries.  Experience with all phases of development and operations.</p>
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.mainTitle}>Experience</h2>
            <p className={classes.mainText}><span className={classes.boldMainText}>TrueCar - Senior Engineer / Austin, TX / Since August 2015</span> ... Developed client-facing tools.  Maintained Python stack concurrent with Node.js / React stack development.  Heavy focus on user experience and design implementation.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Car and Driver Magazine ~ Hearst Digital Media - Director of Technical Development / Ann Arbor, MI ~ New York, NY / January 2009 - June 2015</span> ... Architected and developed internal applications.  Led Agile Scrum process.  Provided technical leadership to aggressively extend and modernize the caranddriver.com platform.  Oversaw migration of hosting services to AWS.  Implemented adaptable Agile development environment.  Hired and cultivated local Ann Arbor team.  Led MHacks participation and recruitment process.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Houghton Mifflin Harcourt Publishing – Senior Software Engineer /
San Bernardino, CA / November 2005 – December 2008</span> ... Championed site performance and data processing improvements for student achievement data information and reporting system.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Arrowhead Credit Union - E-Commerce Architect / San Bernardino, CA - February 2002 – November 2005</span> ... Principal architect for 25th largest credit union.  Oversaw credit union’s first modern online banking system and ensured regulatory compliance.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Vicinitas, Corp. – President, Chief Architect / Running Springs, CA / August 2003 – December 2011</span> ... Developed, operated, and contributed to community news site serving the mountain area’s 80,000 residents.  Developed remote news gathering technology and procedures allowing for adept coverage of local disasters faster than regional television media.  Spoke at Annual Natural Hazards Research and Applications Workshop on the internet’s role in local disaster communication.  Participated in San Bernardino County cross-agency board to facilitate emergency communication during disasters.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Ticketmaster Online – Senior Engineer / Pasadena, CA / August 1996 – November 1999, September 2000 – November 2001</span> ... Early startup developer for Citysearch, one of the first online community guides.  Architected and developed editorial content management system soliciting editorial feedback for UX improvements.  Provided front-line support and development for international partner markets.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>MyHome.com - Senior Engineer / Pasadena, CA / November 1999 - September 2000</span> ... Early startup developer for online e-commerce retailer.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Dun & Bradstreet Information Services – Software Developer / Bethlehem, PA - October 1993 – August 1996</span> ... Developed sales force automation tools.  Provided front-line technical support for sales team.  Participated in rollouts and trainings.</p>
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.mainTitle}>Education</h2>
            <p className={classes.mainText}>Bachelors of Science, Information Technology, University of Phoenix</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}>Coursera Machine Learning (On-Going)</p>
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.mainTitle}>Passions</h2>
            <p className={classes.mainText}><span className={classes.boldMainText}>Lightweight, scalable, versatile technologies</span> allowing for rapid implementation and elegant real-world problem-solving, utilizing the latest componentization, responsive design, and device-specific splitting and packaging.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Developing for user experience</span> by focusing on the product user and developing applications that address anticipated and emergent needs.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Fomenting disruptive vision</span> by never let a team settle for status quo. Relentlessly asking "why" to continually retarget technologies and solutions.</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}><span className={classes.boldMainText}>Improving communities</span> by always looking at ways to give back -- to be disruptive for good.</p>
          </Paper>
          <Paper className={classes.paper}>
            <h2 className={classes.mainTitle}>Awards</h2>
            <p className={classes.mainText}>IBM Watson Cognitive Builder, Austin, TX, May 2017 - Grand Prize Winner</p>
            <Separator className={classes.separator}/>
            <p className={classes.mainText}>TrueCar TrueHacks Hackathon, Santa Monica, CA, December 2017 - Winner, Most Likely To Be Made Into A Product</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
