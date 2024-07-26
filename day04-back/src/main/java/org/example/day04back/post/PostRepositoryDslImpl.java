package org.example.day04back.post;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostRepositoryDslImpl implements PostRepositoryDsl {
    private final JPAQueryFactory queryFactory;
    private final QPost post;


    public PostRepositoryDslImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
        this.post = QPost.post;
    }

    @Override
    public List<Post> searchByTitle(String word) {
        return queryFactory
                .selectFrom(post)
                .where(titleContains(word))
                .fetch();
    }

    private BooleanExpression titleContains(String word) {
        if (word == null || word.isBlank()) {
            return null;
        }
        return post.title.contains(word);
    }
}
