// components
import { getTeamMember } from '@api/index';
import { Layout } from '@components/Layout';
import { MemberCard } from '@components/MemberCard';
import { Spinner } from '@components/Spinner';
// types
import { TeamMember } from '@interfaces/data';
import { useQuery } from '@tanstack/react-query';
// deps
import { useParams } from 'react-router-dom';

export function TeamMemberOverview() {
  const { memberId } = useParams<{ memberId: string }>();

  if (!memberId) {
    throw new Error('member ID not found');
  }

  const {
    data: member,
    isLoading,
    error,
  } = useQuery<TeamMember>(['team', 'member', memberId], () => getTeamMember(memberId));

  if (isLoading) {
    return <Spinner />;
  }

  if (member) {
    return (
      <Layout
        subtitle="Team member"
        title={`${member.firstName} ${member.lastName}`}
        showBackButton
      >
        <MemberCard member={member} />
      </Layout>
    );
  }

  return <div>{typeof error === 'string' ? error : 'something went wrong'}</div>;
}
