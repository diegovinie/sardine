import mlreef, { gitlab } from '../connection';

export default {
  check: async (req, res) => {
    const gitlabq = await gitlab.query('SELECT email from users LIMIT 1');
    const mlreefq = await mlreef.query('SELECT username from account LIMIT 1');

    return res.json({
      gitlabdb: !!gitlabq ? 'active' : 'failed',
      mlreefdb: !!mlreefq ? 'active' : 'failed',
    });
  },
};
